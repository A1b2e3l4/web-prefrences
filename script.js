document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("designForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Validate inputs
      const primaryColor = document.getElementById("primaryColor").value;
      const secondaryColor = document.getElementById("secondaryColor").value;
      const accentColor = document.getElementById("accentColor").value;
      const headerImage = document.getElementById("headerImage").files[0];
      const galleryImages = document.getElementById("galleryImages").files;
      const fontFamily = document.getElementById("fontFamily").value;
      const fontSize = document.getElementById("fontSize").value;
      const layoutStyle = document.getElementById("layoutStyle").value;
      const navigationStyle = document.getElementById("navigationStyle").value;
      const additionalNotes = document.getElementById("additionalNotes").value;
  
      // Simple validation example
      if (!primaryColor || !secondaryColor || !accentColor) {
        alert("Please select all color preferences.");
        return;
      }
  
      if (!headerImage) {
        alert("Please upload a header image.");
        return;
      }
  
      if (galleryImages.length > 5) {
        alert("You can upload a maximum of 5 gallery images.");
        return;
      }
  
      // Display confirmation message
      confirmationMessage.classList.remove("hidden");
  
      // Log the data to the console (you can replace this with an API call or backend integration)
      console.log("Primary Color:", primaryColor);
      console.log("Secondary Color:", secondaryColor);
      console.log("Accent Color:", accentColor);
      console.log("Header Image:", headerImage);
      console.log("Gallery Images:", galleryImages);
      console.log("Font Family:", fontFamily);
      console.log("Font Size:", fontSize);
      console.log("Layout Style:", layoutStyle);
      console.log("Navigation Style:", navigationStyle);
      console.log("Additional Notes:", additionalNotes);
  
      // Optionally, reset the form after submission
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("designForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Validate inputs (add more validation as needed)
      const audienceAge = document.getElementById("audienceAge").value;
      const audienceGoal = document.getElementById("audienceGoal").value;
      const logoUpload = document.getElementById("logoUpload").files[0];
      const brandingGuidelines = document.getElementById("brandingGuidelines").value;
      const brandPersonality = document.getElementById("brandPersonality").value;
      const contentHelp = document.getElementById("contentHelp").value;
      const pageTypes = document.getElementById("pageTypes").value;
      const ctaPreferences = document.getElementById("ctaPreferences").value;
      const seoKeywords = document.getElementById("seoKeywords").value;
      const metaPreferences = document.getElementById("metaPreferences").value;
      const analyticsIntegration = document.getElementById("analyticsIntegration").value;
      const features = document.getElementById("features").value;
      const integrations = document.getElementById("integrations").value;
      const interactivity = document.getElementById("interactivity").value;
      const inspirationSites = document.getElementById("inspirationSites").value;
      const visualStyle = document.getElementById("visualStyle").value;
      const animations = document.getElementById("animations").value;
      const maintenanceManager = document.getElementById("maintenanceManager").value;
      const updateFrequency = document.getElementById("updateFrequency").value;
      const trainingNeeds = document.getElementById("trainingNeeds").value;
      const timeline = document.getElementById("timeline").value;
      const budget = document.getElementById("budget").value;
  
      // Simple validation example
      if (!audienceAge || !audienceGoal) {
        alert("Please fill out the Target Audience section.");
        return;
      }
  
      if (!logoUpload) {
        alert("Please upload a logo.");
        return;
      }
  
      // Display confirmation message
      confirmationMessage.classList.remove("hidden");
  
      // Log the data to the console (you can replace this with an API call or backend integration)
      console.log("Target Audience:", { audienceAge, audienceGoal });
      console.log("Branding:", { logoUpload, brandingGuidelines, brandPersonality });
      console.log("Content Preferences:", { contentHelp, pageTypes, ctaPreferences });
      console.log("SEO Requirements:", { seoKeywords, metaPreferences, analyticsIntegration });
      console.log("Functionalities:", { features, integrations, interactivity });
      console.log("Visual Style:", { inspirationSites, visualStyle, animations });
      console.log("Maintenance & Updates:", { maintenanceManager, updateFrequency, trainingNeeds });
      console.log("Timeline & Budget:", { timeline, budget });
  
      // Optionally, reset the form after submission
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("designForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Gather form data
      const formData = {
        audienceAge: document.getElementById("audienceAge").value,
        audienceGoal: document.getElementById("audienceGoal").value,
        brandPersonality: document.getElementById("brandPersonality").value,
        contentHelp: document.getElementById("contentHelp").value,
        pageTypes: document.getElementById("pageTypes").value,
        ctaPreferences: document.getElementById("ctaPreferences").value,
        seoKeywords: document.getElementById("seoKeywords").value,
        metaPreferences: document.getElementById("metaPreferences").value,
        analyticsIntegration: document.getElementById("analyticsIntegration").value,
        features: document.getElementById("features").value,
        integrations: document.getElementById("integrations").value,
        interactivity: document.getElementById("interactivity").value,
        inspirationSites: document.getElementById("inspirationSites").value,
        visualStyle: document.getElementById("visualStyle").value,
        animations: document.getElementById("animations").value,
        maintenanceManager: document.getElementById("maintenanceManager").value,
        updateFrequency: document.getElementById("updateFrequency").value,
        trainingNeeds: document.getElementById("trainingNeeds").value,
        timeline: document.getElementById("timeline").value,
        budget: document.getElementById("budget").value,
      };
  
      // Send data to the backend
      fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            confirmationMessage.classList.remove("hidden");
            form.reset();
          } else {
            alert("Error: " + data.error);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        });
    });
  });