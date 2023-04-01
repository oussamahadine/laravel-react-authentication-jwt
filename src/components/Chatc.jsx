import React, {useState} from 'react'

const Chatc = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([{ message: "Hi Jane, how are you?", provider: "me" }])

    const dispalyMessages =  messages.map((item) =>
        item.provider == "me" ?
                         <div class="mb-4 text-right">
                            <div class="px-4 py-2 rounded-lg bg-blue-500 text-white">{item.message}</div>
                         </div>
                         :
                         <div class="mb-4">
                           <div class="px-4 py-2 rounded-lg bg-gray-300">{item.message}</div>
                         </div>
                         )
        //this is my code and not from google
const getMessage  = (e) => {
    setMessage(e.target.value)
}

const sendMessage = () => {
    if(message != ''){
        setMessages((currentState) => ([...currentState, {message : message, provider : "me"}]))
        setMessage("")
    }
}



return (
        <div class="flex justify-center items-center h-screen">
            <div class="w-full max-w-md">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Chat with Jane</div>
                        <div class="h-64 overflow-y-auto">
                            {dispalyMessages}
                        </div>
                        <div class="flex mt-4">
                            <input type="text"  value={message} onChange={(e)=>getMessage(e)} class="flex-grow rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Type your message here..." />
                            <button class="bg-blue-500 hover:bg-blue-700 rounded-r-lg px-4 py-2 text-white" disabled={message != '' ? false : true} onClick={()=>sendMessage()}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatc