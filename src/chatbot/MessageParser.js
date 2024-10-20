
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleHello();
      }
      if (lowerCaseMessage.includes("yes") || lowerCaseMessage.includes("oui")) {
        this.actionProvider.handleJaw();
      } 
      if (lowerCaseMessage.includes("op1") ) {
        this.actionProvider.handleEspace();
      } 
      if (lowerCaseMessage.includes("continue") ) {
        this.actionProvider.handleEspace2();
      }

      if (lowerCaseMessage.includes("c2") ) {
         this.actionProvider.handleEspace3();
      }
      if (lowerCaseMessage.includes("op2") ) {
        this.actionProvider.handleOp2 ();
      } 
      if (lowerCaseMessage.includes("circulation") ) {
        this.actionProvider.handleCirculation ();
      } 
      if (lowerCaseMessage.includes("nature") ) {
        this.actionProvider.handleNature ();
      } 
      
      
      else if (lowerCaseMessage.includes("how are you")) {
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
      } 
      
      else if (lowerCaseMessage.includes("Quels types d'améliorations aimeriez-vous pour rendre votre ville plus durable o Option 1 : Espaces verts et parcso Option 2 : Solutions de transport durable (ex : pistes cyclables, transports publics   électriques)  o Option 3 : Bâtiments écologiques et économes en énergie                                  ") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      else if (lowerCaseMessage.includes("schedule") || lowerCaseMessage.includes("consultation")) {
        this.actionProvider.handleScheduleConsultation();
      } 
      
      else {
        // Default action if no specific match is found
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;