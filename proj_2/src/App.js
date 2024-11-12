import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
    const msgEnd = useRef(null);

    const [input, setInput] = useState("");
    const [dessages, setMessages] = useState([
        {
            text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI.",
            isBot: true,

        }

    ]);

    const handleSend = async () => {
        const res = await sendMsgToOpenAI(input);
        console.log(res);
    }

    const handleSend = async () => {
        const text = input;
        setInput('');
        const res = await sendMsgToOpenAI(text);
        setMessages([
            ...messages,
            text{ isBot: false },
            { text: res, isBot: true }

        ]);
    }

    useEffect(() => {
        msgEnd.current.scrollIntoView();
    }, [messages]);

    return (
        <div className="App">
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" />
                        <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>
                        <div className="upperSideBottom">
                            <button className="query"><img src="" alt="" />What is Programming ?</button>
                            <button className="query"><img src="" alt="" />What is Programming ?</button>
                        </div>
                    </div>
                    <div className="lowerSide">
                        <div className="listItems"><img src={home} alt="Home" className="listItems Img" />Home</div>
                        <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
                        <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade</div>
                    </div>

                    <div className="main">
                        <div className="chats">
                            <div className="chat">
                                <img src="" alt="" /><p clasName="txt">Lorem ipsum dolor sit amet consect</p>

                                {messages.map((message, i) => {
                                    <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                                        <img className='chatImg' src={message.isBot ? gptImgLogo : userIcon} />
                                    </div>
                                })
                                }
                            </div>
                        </div>
                        <div className="chatFooter">
                            <div className="inp">
                                <input type="text" placeholder='Send a message' /><button className="send">send</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}