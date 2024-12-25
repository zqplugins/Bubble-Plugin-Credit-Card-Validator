function(instance, properties, context) {

    if (properties.card_number) {
        document.getElementById('cardInput').value = properties.card_number;




        $('#cardInput').validateCreditCard(function(result) {

            instance.publishState('validity', result.valid);

            if (result.valid) {
                var cardShortName = result.card_type.name;


                switch (cardShortName) {
                    case "visa":
                        instance.publishState('card_type', "Visa");
                        instance.publishState('card_icon', "[fa] fa-cc-visa [/fa]");
                        break;
                    case "amex":
                        instance.publishState('card_type', "American Express");
                        instance.publishState('card_icon', "[fa] fa-cc-amex [/fa]");
                        break;
                    case "dankort":
                        instance.publishState('card_type', "Dankort");
                        instance.publishState('card_icon', "[fa] fa-cc-credit-card-alt [/fa]");
                        break;
                    case "diners_club_carte_blanche":
                        instance.publishState('card_type', "Diners Club Carte Blanche");
                        instance.publishState('card_icon', "[fa] fa-cc-diners-club [/fa]");
                        break;
                    case "diners_club_international":
                        instance.publishState('card_type', "Diners Club International");
                        instance.publishState('card_icon', "[fa] fa-cc-diners-club [/fa]");
                        break;
                    case "mastercard":
                        instance.publishState('card_type', "Mastercard");
                        instance.publishState('card_icon', "[fa] fa-cc-mastercard [/fa]");
                        break;
                    case "discover":
                        instance.publishState('card_type', "Discover");
                        instance.publishState('card_icon', "[fa] fa-cc-discover [/fa]");
                        break;
                    case "jcb":
                        instance.publishState('card_type', "JCB");
                        instance.publishState('card_icon', "[fa] fa-cc-jcb [/fa]");
                        break;
                    case "laser":
                        instance.publishState('card_type', "Laser");
                        instance.publishState('card_icon', "[fa] fa-cc-credit-card-alt [/fa]");
                        break;
                    case "maestro":
                        instance.publishState('card_type', "Maestro");
                        instance.publishState('card_icon', "[fa] fa-cc-mastercard [/fa]");
                        break;
                    case "uatp":
                        instance.publishState('card_type', "UATP");
                        instance.publishState('card_icon', "[fa] fa-cc-credit-card-alt [/fa]");
                        break;
                    case "visa_electron":
                        instance.publishState('card_type', "Visa Electron");
                        instance.publishState('card_icon', "[fa] fa-cc-visa [/fa]");
                        break;
                    case "mir":
                        instance.publishState('card_type', "Mir");
                        instance.publishState('card_icon', "[fa] fa-credit-card [/fa]");
                        break;
                    default:
                        instance.publishState('card_type', "");
                        instance.publishState('card_icon', "");
                        break;
                }

            } else {
                instance.publishState('card_type', "");
                instance.publishState('card_icon', "");
            }

        });

    } else {
        instance.publishState('validity', false);
        instance.publishState('card_type', "");
        instance.publishState('card_icon', "");

    }


}