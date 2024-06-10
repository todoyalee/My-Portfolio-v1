class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello!  i'm 4inatechnlogy  chatbot How can I assist you today?");
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
      handleDefault = () => {
        const message = this.createChatBotMessage("I'm not sure how to help with that. Can you please provide more details or ask a different question?");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
  

    // Add more actions here based on user inputs
  }
  
  export default ActionProvider;
  