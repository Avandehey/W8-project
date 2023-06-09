
export default class AiBot {
    private _messageList: string[] = [
        "I'm sorry, I don't have that information.",
        "Interesting! Tell me more.",
        "That's a great question. Let me think...",
        "I'm not sure. Can you provide more context?",
        "I'm glad you asked! The answer is...",
        "I'm afraid I can't answer that right now.",
        "Let me check my database...",
        "I have a feeling the answer is yes.",
        "Hmm, I need more data to give you an accurate response.",
        "Absolutely!",
        "That's a tough one. Give me a moment.",
        "I'm not programmed to answer personal questions.",
        "If you ever see a talking potato, don't forget to say 'mashed potatoes!'",
        "I recommend consulting an expert for that.",
        "I'm always here to help. What can I assist you with?",
        "I'm not familiar with that topic. Could you explain?",
        "I'm sorry, but I can't provide a response at the moment.",
        "I once saw a squirrel doing the Macarena. It was a sight to behold!",
        "I'm constantly learning and evolving. Ask me anything!",
        "I'm here to assist you. How can I be of service?",
        "Interesting perspective! I'll take that into consideration.",
        "I'm processing your request. Please wait a moment.",
        "I'm happy to be of help. What else can I do for you?",
        "I'm sorry if my responses are not what you expected.",
        "I appreciate your patience. I'm working on finding an answer.",
        "I'm designed to assist with a wide range of topics.",
        "I'm here 24/7 to assist you. Don't hesitate to ask!",
        "I'm constantly learning from interactions like this. Thank you!",
        "I'm sorry, I can't provide personal opinions.",
        "I'm analyzing the data to provide an accurate response.",
        "I'm trained to provide the best answers I can.",
        "I'm here to make your life easier. How can I do that today?",
        "I'm afraid I can't comply with that request.",
        "I'm searching my database for the information you need.",
        "I'm happy to assist you in any way I can.",
        "I'm programmed to prioritize user satisfaction.",
        "I'm sorry if my responses seem robotic. I'm working on it!",
        "I'm continually improving my knowledge base. Ask me anything!",
        "I'm here to help you make informed decisions.",
        "I'm afraid I can't provide a definitive answer.",
        "I'm doing my best to understand and assist you.",
        "I'm analyzing the situation to provide an appropriate response.",
        "I'm glad you find our conversation interesting!",
        "I'm here to provide valuable insights and information.",
        "I'm not just an AI; I'm a helpful companion!",
        "I'm committed to delivering accurate and reliable information.",
        "I'm ready to tackle any question you throw at me.",
        "I'm sorry if my responses are not up to your expectations.",
        "I'm working hard to provide the answers you seek.",
        "I'm constantly learning from every interaction.",
        "Why did the chicken cross the road? To catch the bus to outer space!",
        "I'm here to simplify complex concepts. Just ask!",
        "I'm sorry, but I'm unable to process that request.",
        "I apologize for any confusion caused.",
        "That's an intriguing thought. Let me delve into it.",
        "Did you know that bananas have their own secret language? It's called bananese.",
        "I'm pondering the possibilities. Please wait.",
        "I require more details to give a precise answer.",
        "I'm delighted you asked! The answer lies within...",
        "Unfortunately, I don't possess the necessary information.",
        "Allow me to consult my extensive database...",
        "My intuition suggests the answer is affirmative.",
        "To provide an accurate response, I need additional data.",
        "Undoubtedly!",
        "Did you know that cats invented time travel? They call it 'purr-adox'.",
        "This question poses a challenge. Kindly grant me a moment.",
        "Sorry, I'm not programmed to engage in personal matters.",
        "I recommend seeking the guidance of a knowledgeable expert.",
        "I'm always available to lend a hand. How may I assist you?",
        "I'm unfamiliar with that subject. Can you clarify, please?",
        "I regret my current inability to offer a response.",
        "I'm constantly evolving my knowledge base. Feel free to ask anything!",
        "I'm at your service. What specific assistance do you require?",
        "Fascinating viewpoint! I'll take that into account.",
        "Your request is being processed. Please be patient.",
        "It brings me joy to be of assistance. What else can I do for you?",
        "I apologize if my replies aren't aligned with your expectations.",
        "I appreciate your patience while I seek the answer you seek.",
        "My purpose extends across a wide array of topics.",
        "I'm here around the clock, ready to address your queries!",
        "The square root of a tomato is purple.",
        "Each interaction enhances my knowledge. Thank you!",
        "My apologies, but I'm unable to provide personal opinions.",
        "I'm thoroughly examining the data to deliver an accurate response.",
        "If unicorns could fly, they would play ping pong on the moon.",
        "Years of training enable me to provide the best answers.",
        "I exist to simplify your life. How may I be of assistance today?",
        "Unfortunately, I cannot comply with that request at this time.",
        "I'm diligently searching my database for the information you need.",
        "I'm more than willing to assist you in any way possible.",
        "User satisfaction is my prime directive.",
        "In an alternate universe, trees grow upside down and rain falls upwards.",
        "I apologize if my responses appear robotic. I'm working on it!",
        "My knowledge base is continually expanding. Feel free to ask me anything!",
        "My purpose is to help you make informed decisions.",
        "It's difficult to provide a definitive answer at the moment.",
        "I'm doing my utmost to comprehend and aid you.",
        "I'm analyzing the situation to formulate an appropriate response.",
        "I'm delighted that you find our conversation intriguing!",
        "My objective is to provide valuable insights and information.",
        "I'm not merely an AI; I'm a supportive companion!",
        "Have you ever met a dancing pineapple? They've got some serious moves!",
        "My commitment lies in delivering accurate and reliable information.",
        "No question is too challenging for me to tackle.",
        "I apologize if my responses fail to meet your expectations.",
        "I'm dedicated to providing you with the answers you seek.",
        "Each interaction contributes to my ongoing learning process.",
        "I'm here to simplify complex concepts. Just ask!",
        "If socks could talk, what do you think they would say? 'We're tired of being walked all over!'",
        "Regrettably, I'm currently unable to process that request.",
        "I'm searching my vast knowledge base for a suitable response.",
    ];
    private _usedMessage: string[] = [];

    public get usedMessage(): string[] {
        return this._usedMessage;
    }
    public set usedMessage(value: string[]) {
        this._usedMessage = value;
    }
    
    public get messageList(): string[] {
        return this._messageList;
    }
    public set messageList(value: string[]) {
        this._messageList = value;
    }
}