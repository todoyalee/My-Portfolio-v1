
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleHello();
      } else if (lowerCaseMessage.includes("how are you")) {
        this.actionProvider.handleHowAreYou();
      } else if (lowerCaseMessage.includes("service") || lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();
      } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("support")) {
        this.actionProvider.handleContact();
      } else if (lowerCaseMessage.includes("energy audit")) {
        this.actionProvider.handleEnergyAudit();
      } else if (lowerCaseMessage.includes("efficiency consulting")) {
        this.actionProvider.handleEfficiencyConsulting();
      } else if (lowerCaseMessage.includes("r ") || lowerCaseMessage.includes("solar panel")) {
        this.actionProvider.handleRenewableEnergy();
      } else if (lowerCaseMessage.includes("real-time monitoring")) {
        this.actionProvider.handleRealTimeMonitoring();
      } else if (lowerCaseMessage.includes("bill") || lowerCaseMessage.includes("payment")) {
        this.actionProvider.handleBilling();
      } else if (lowerCaseMessage.includes("outage")) {
        this.actionProvider.handleOutage();
      } else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } else {
        // Default action if no specific match is found
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;