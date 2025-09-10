import { universityData } from "./data/universities.js";
document.addEventListener("DOMContentLoaded", () => {
  // Updated university data with a new 'scholarships' field for each entry.

  const nationalGrid = document.getElementById("national-grid");
  const localPublicGrid = document.getElementById("local-public-grid");
  const privateGrid = document.getElementById("private-grid");
  const selectedUniversitiesGrid = document.getElementById(
    "selected-universities-grid"
  );
  const selectedUniversitiesSection = document.getElementById(
    "selected-universities-section"
  );
  const modal = document.getElementById("university-modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalBtn = document.getElementById("close-modal");
  const searchInput = document.getElementById("search-input");
  const searchName = document.getElementById("search-name");
  const tuitionSlider = document.getElementById("tuition-slider");
  const tuitionValue = document.getElementById("tuition-value");
  const typeFilterBtns = document.querySelectorAll(".type-filter-btn");
  const programFilterBtns = document.querySelectorAll(".program-filter-btn");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");
  const nationalSection = document.getElementById("national-section");
  const localPublicSection = document.getElementById("local-public-section");
  const privateSection = document.getElementById("private-section");
  const autocompleteList = document.getElementById("autocomplete-list");

  let currentTypeFilter = "all";
  let activeProgramFilters = new Set();
  let selectedUniversities = new Set();
  let currentAutocompleteIndex = -1;

  const formatYen = (num) => `¥${num.toLocaleString("ja-JP")}`;

  const renderUniversities = () => {
    const selectedLocation = searchInput.value.toLowerCase();
    const searchNameValue = searchName.value.toLowerCase();
    const maxTuition = parseInt(tuitionSlider.value);
    const isProgramFilterActive = activeProgramFilters.size > 0;

    const filteredUniversities = universityData.filter((uni) => {
      const matchesType =
        currentTypeFilter === "all" || uni.type === currentTypeFilter;
      const matchesLocation =
        !selectedLocation ||
        uni.location.toLowerCase().includes(selectedLocation);
      const matchesName =
        !searchNameValue || uni.name.toLowerCase().includes(searchNameValue);
      const matchesTuition = uni.tuition <= maxTuition;
      const matchesProgram =
        !isProgramFilterActive ||
        uni.programCategories.some((cat) => activeProgramFilters.has(cat));

      return (
        matchesType &&
        matchesLocation &&
        matchesName &&
        matchesTuition &&
        matchesProgram
      );
    });

    const nationalUnis = filteredUniversities.filter(
      (uni) => uni.type === "National"
    );
    const localPublicUnis = filteredUniversities.filter(
      (uni) => uni.type === "Local Public"
    );
    const privateUnis = filteredUniversities.filter(
      (uni) => uni.type === "Private"
    );

    nationalGrid.innerHTML = "";
    localPublicGrid.innerHTML = "";
    privateGrid.innerHTML = "";

    nationalSection.classList.add("hidden");
    localPublicSection.classList.add("hidden");
    privateSection.classList.add("hidden");

    if (
      nationalUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "National")
    ) {
      nationalSection.classList.remove("hidden");
      nationalUnis.forEach((uni, index) => {
        nationalGrid.appendChild(createCard(uni, index));
      });
    }

    if (
      localPublicUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "Local Public")
    ) {
      localPublicSection.classList.remove("hidden");
      localPublicUnis.forEach((uni, index) => {
        localPublicGrid.appendChild(createCard(uni, index));
      });
    }

    if (
      privateUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "Private")
    ) {
      privateSection.classList.remove("hidden");
      privateUnis.forEach((uni, index) => {
        privateGrid.appendChild(createCard(uni, index));
      });
    }

    const totalFiltered =
      nationalUnis.length + localPublicUnis.length + privateUnis.length;
    if (totalFiltered === 0) {
      noResults.classList.remove("hidden");
      resultsCount.textContent = "";
    } else {
      noResults.classList.add("hidden");
      resultsCount.textContent = `Showing ${totalFiltered} of ${universityData.length} universities.`;
    }
  };

  const createCard = (uni, index) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md flex flex-col transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden";
    card.dataset.name = uni.name;

    const isSelected = selectedUniversities.has(uni.name);

    card.innerHTML = `
              <span class="card-number">${index + 1}</span>
              <div class="flex-grow p-6">
                  <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    uni.type === "National"
                      ? "bg-blue-100 text-blue-800"
                      : uni.type === "Local Public"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }">${uni.type}</span>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">${
                    uni.name
                  }</h3>
                  <p class="text-gray-600 text-sm mb-4">Annual Tuition: <span class="font-semibold text-gray-800">${formatYen(
                    uni.tuition
                  )}</span></p>
              </div>
              <div class="mt-auto p-6 pt-0 flex gap-4">
                  <button class="view-details bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">View Details</button>
                  <button class="select-university flex-1 text-center px-4 py-2 rounded-xl transition font-semibold ${
                    isSelected
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }">
                      ${isSelected ? "Unselect" : "Select"}
                  </button>
              </div>
          `;

    card
      .querySelector(".view-details")
      .addEventListener("click", () => showModal(uni));
    card.querySelector(".select-university").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleUniversitySelection(uni);
    });

    return card;
  };

  const toggleUniversitySelection = (uni) => {
    if (selectedUniversities.has(uni.name)) {
      selectedUniversities.delete(uni.name);
    } else {
      selectedUniversities.add(uni.name);
    }
    renderSelectedUniversities();
    renderUniversities();
  };

  const renderSelectedUniversities = () => {
    selectedUniversitiesGrid.innerHTML = "";
    if (selectedUniversities.size > 0) {
      selectedUniversitiesSection.classList.remove("hidden");
      Array.from(selectedUniversities).forEach((uniName) => {
        const uni = universityData.find((u) => u.name === uniName);
        if (uni) {
          const card = createSelectedCard(uni);
          selectedUniversitiesGrid.appendChild(card);
        }
      });
    } else {
      selectedUniversitiesSection.classList.add("hidden");
    }
  };

  const createSelectedCard = (uni) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md flex flex-col relative overflow-hidden";
    card.innerHTML = `
              <div class="flex-grow p-6">
                  <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    uni.type === "National"
                      ? "bg-blue-100 text-blue-800"
                      : uni.type === "Local Public"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }">${uni.type}</span>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">${
                    uni.name
                  }</h3>
                  <p class="text-gray-600 text-sm mb-4">Annual Tuition: <span class="font-semibold text-gray-800">${formatYen(
                    uni.tuition
                  )}</span></p>
              </div>
              <div class="mt-auto p-6 pt-0 flex gap-4">
                  <button class="view-details bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">View Details</button>
                  <button class="remove-selected flex-1 text-center px-4 py-2 rounded-lg transition font-semibold bg-red-500 text-white hover:bg-red-600">
                      Remove
                  </button>
              </div>
          `;

    card
      .querySelector(".view-details")
      .addEventListener("click", () => showModal(uni));
    card.querySelector(".remove-selected").addEventListener("click", () => {
      selectedUniversities.delete(uni.name);
      renderSelectedUniversities();
      renderUniversities();
    });

    return card;
  };

  const showModal = (uni) => {
    const totalFirstYearCost = uni.tuition + uni.admissionFee;

    modalBody.innerHTML = `
              <h2 class="text-3xl font-bold mb-2">${uni.name}</h2>
              <span class="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                uni.type === "National"
                  ? "bg-blue-100 text-blue-800"
                  : uni.type === "Local Public"
                  ? "bg-green-100 text-green-800"
                  : "bg-orange-100 text-orange-800"
              }">${uni.type} University</span>
              <div class="flex flex-wrap gap-2 mt-2">
                  ${uni.programCategories
                    .map(
                      (cat) =>
                        `<span class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">${cat}</span>`
                    )
                    .join("")}
              </div>
              <div class="space-y-4 text-gray-700 mt-4">
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Program Information</h4>
                      <p>${uni.programs}</p>
                  </div>
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Cost Breakdown & Fees</h4>
                      <ul class="list-disc list-inside">
                          <li>Annual Tuition: <span class="font-medium">${formatYen(
                            uni.tuition
                          )}</span></li>
                          <li>One-time Admission Fee: <span class="font-medium">${formatYen(
                            uni.admissionFee
                          )}</span></li>
                          <li><strong>Estimated First-Year Cost:</strong> <span class="font-bold">${formatYen(
                            totalFirstYearCost
                          )}</span></li>
                      </ul>
                  </div>
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Scholarship Opportunities</h4>
                      <p>${uni.scholarships}</p>
                  </div>
                  <div class="mt-6">
                      <a href="${
                        uni.website
                      }" target="_blank" rel="noopener noreferrer" class="inline-block w-full sm:w-auto bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">Visit Website →</a>
                  </div>
              </div>
          `;
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.querySelector(".modal-content").classList.remove("scale-95");
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.querySelector(".modal-content").classList.add("scale-95");
    document.body.style.overflow = "";
  };

  const renderTuitionChart = () => {
    const ctx = document.getElementById("tuition-chart").getContext("2d");
    const nationalUnis = universityData.filter((u) => u.type === "National");
    const localPublicUnis = universityData.filter(
      (u) => u.type === "Local Public"
    );
    const privateUnis = universityData.filter((u) => u.type === "Private");

    const avgNational =
      nationalUnis.reduce((acc, u) => acc + u.tuition, 0) / nationalUnis.length;
    const avgLocal =
      localPublicUnis.reduce((acc, u) => acc + u.tuition, 0) /
      localPublicUnis.length;
    const avgPrivate =
      privateUnis.reduce((acc, u) => acc + u.tuition, 0) / privateUnis.length;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["National", "Local Public", "Private"],
        datasets: [
          {
            label: "Average Annual Tuition (JPY)",
            data: [avgNational, avgLocal, avgPrivate],
            backgroundColor: [
              "rgba(59, 131, 246, 1)",
              "rgba(16, 185, 129, 1)",
              "rgba(255, 166, 0, 1)",
            ],
            borderColor: [
              "rgba(59, 130, 246, 1)",
              "rgba(16, 185, 129, 1)",
              "rgba(255, 165, 0, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += formatYen(context.parsed.y);
                }
                return label;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "¥" + value / 1000 + "k";
              },
            },
          },
        },
      },
    });
  };

  const updateAutocomplete = () => {
    const searchTerm = searchName.value.toLowerCase();
    autocompleteList.innerHTML = "";
    currentAutocompleteIndex = -1;

    // Check if the search term is empty and render all universities
    if (searchTerm === "") {
      autocompleteList.classList.add("hidden");
      // This is the key line to add or modify
      renderUniversities();
      return;
    }

    const filtered = universityData.filter((uni) =>
      uni.name.toLowerCase().includes(searchTerm)
    );

    if (filtered.length > 0) {
      autocompleteList.classList.remove("hidden");
      filtered.forEach((uni) => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        const matchText = uni.name.replace(
          new RegExp(searchTerm, "gi"),
          (match) => `<strong>${match}</strong>`
        );
        item.innerHTML = `${matchText}<div class="text-gray-500 text-sm">${uni.location}</div>`;
        item.addEventListener("click", () => {
          searchName.value = uni.name;
          autocompleteList.classList.add("hidden");
          renderUniversities();
        });
        autocompleteList.appendChild(item);
      });
    } else {
      autocompleteList.classList.add("hidden");
    }
  };

  // Event listeners for autocomplete functionality
  searchName.addEventListener("input", updateAutocomplete);
  searchName.addEventListener("focus", updateAutocomplete);
  searchName.addEventListener("keydown", (e) => {
    const items = autocompleteList.querySelectorAll(".autocomplete-item");
    if (e.key === "ArrowDown") {
      currentAutocompleteIndex = (currentAutocompleteIndex + 1) % items.length;
      highlightItem(items, currentAutocompleteIndex);
    } else if (e.key === "ArrowUp") {
      currentAutocompleteIndex =
        (currentAutocompleteIndex - 1 + items.length) % items.length;
      highlightItem(items, currentAutocompleteIndex);
    } else if (e.key === "Enter") {
      if (currentAutocompleteIndex > -1) {
        items[currentAutocompleteIndex].click();
      } else {
        renderUniversities();
      }
    }
  });

  const highlightItem = (items, index) => {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Hide autocomplete when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchName.parentElement.contains(e.target)) {
      autocompleteList.classList.add("hidden");
    }
  });

  // Populate the location select dropdown
  const locations = [
    ...new Set(universityData.map((uni) => uni.location)),
  ].sort();
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.toLowerCase();
    option.textContent = location;
    searchInput.appendChild(option);
  });

  typeFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeFilterBtns.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      currentTypeFilter = btn.dataset.filter;
      renderUniversities();
    });
  });

  programFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active-filter");
      const program = btn.dataset.program;
      if (activeProgramFilters.has(program)) {
        activeProgramFilters.delete(program);
      } else {
        activeProgramFilters.add(program);
      }
      renderUniversities();
    });
  });

  searchInput.addEventListener("change", renderUniversities);
  tuitionSlider.addEventListener("input", () => {
    tuitionValue.textContent = formatYen(tuitionSlider.value);
    renderUniversities();
  });

  closeModalBtn.addEventListener("click", hideModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  tuitionValue.textContent = formatYen(tuitionSlider.value);
  renderUniversities();
  renderTuitionChart();
  renderSelectedUniversities();
});
