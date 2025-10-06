  // Validation en temps réel
  const validateInput = (input) => {
    clearError(input);

    if (input === nameInput) {
      if (input.value.trim().length < 2) {
        showError(input, 'Le nom doit contenir au moins 2 caractères');
        return false;
      }
    }

    if (input === emailInput) {
      if (!validateEmail(input.value)) {
        showError(input, 'Veuillez entrer une adresse email valide');
        return false;
      }
    }

    if (input === messageInput) {
      if (input.value.trim().length < 5) {
        showError(input, 'Le message doit contenir au moins 5 caractères');
        return false;
      }
    }

    return true;
  };

  