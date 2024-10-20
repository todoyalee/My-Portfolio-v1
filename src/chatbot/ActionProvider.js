class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello!  i'm energo chatbot , my goal is to help you discover ideas for urban improvements while facilitating their participation  ,would you like to start ? ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleJaw = () => {
      const message = this.createChatBotMessage(
        "Okay, I'm going to ask you some questions to know what kind of improvements you want in your city! First of all:\n" +
        "Quels types d'améliorations aimeriez-vous pour rendre votre ville plus durable ?\n" +
        "Option 1 : Espaces verts et parcs\n" +
        "Option 2 : Solutions de transport durable (ex : pistes cyclables, transports publics électriques)\n" +
        "Option 3 : Bâtiments écologiques et économes en énergie"
      );
      
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleOp2 = () => {
      const message = this.createChatBotMessage("great ! 45% of people support this idea !  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };
    handleEspace = () => {
      const message = this.createChatBotMessage("Les parcs urbains augmentent la biodiversité et offrent des espaces de détente. Souhaitez-vous voter pour la création de nouveaux parcs dans votre ville ?  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleEspace2 = () => {
      const message = this.createChatBotMessage("sure , ! Voici une idée pour améliorer votre ville : 'Créer plus de zones piétonnes pour réduire la pollution.' Souhaitez-vous soutenir cette idée ?  \n Option 1 : Oui, je soutiens cette idée.  \n o Option 2 : Non, je préfère une autre solution.   ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleEspace3 = () => {
      const message = this.createChatBotMessage( "Quel est votre plus grand souci concernant votre ville ?  o Option 1 : Trop de circulation o Option 2 : Manque de nature o Option 3 : Problèmes de gestion des déchets  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleCirculation = () => {
      const message = this.createChatBotMessage( "Pour réduire la circulation, vous pourriez soutenir la création de zones sans voitures ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };
    handleNature = () => {
      const message = this.createChatBotMessage( "Augmenter les espaces verts en intégrant des jardins urbains et des toits végétalisés. ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleHowAreYou = () => {
        const message = this.createChatBotMessage("i'm great thank u for askin , how are u , how is your energy is consumed today?");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleServices = () => {
        const message = this.createChatBotMessage("We offer a range of energy management services including energy audits, efficiency consulting, renewable energy solutions, and real-time energy monitoring.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleContact = () => {
        const message = this.createChatBotMessage("You can contact our customer support by calling [+21623507648], emailing us at [4inatechnology@gmail.com], or using the chat feature on our website.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleEfficiencyConsulting = () => {
        const message = this.createChatBotMessage("Our efficiency consulting service includes a comprehensive review of your energy usage, recommendations for improvements, and assistance with implementing energy-saving measures.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleRenewableEnergy = () => {
        const message = this.createChatBotMessage("We offer renewable energy solutions such as solar panel installations to help you reduce your carbon footprint and energy costs.");
    
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleBilling = () => {
        const message = this.createChatBotMessage("You can pay your bill online through our website, by mail, or by setting up automatic payments through your bank. We accept various payment methods including credit/debit cards, bank transfers, and electronic checks.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleOutage = () => {
        const message = this.createChatBotMessage("In case of a power outage, please contact your local utility provider. For further assistance, you can reach out to our support team.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleScheduleConsultation = () => {
        const message = this.createChatBotMessage("You can schedule a consultation by calling us at [phone number], emailing [email address], or filling out the request form on our website.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));

      };

      // handleDefault = () => {
      //   const message = this.createChatBotMessage("I'm not sure how to help with that. Can you please provide more details or ask a different question?");
      //   this.setState((prev) => ({
      //     ...prev,
      //     messages: [...prev.messages, message],
      //   }));
      // };
  

    // Add more actions here based on user inputs
  }
  
  export default ActionProvider;
  