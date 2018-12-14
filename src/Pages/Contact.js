import React from 'react'

export default class Contact extends React.Component {

    render(){
        return(
            <div>
                You can contact me at colekissell@gmail.com or with the form below
                <form class="form-group" action="https://formspree.io/colekissell@gmail.com" method="POST">
                    <label for='name'>Name:</label>
                    <input type="text" name="name" id="name"
                        class="form-control"
                        placeholder='Enter name'
                        required
                    ></input>
                    <span class="form-text text-muted">Enter your name</span>
                    
                    <label for="email">Email:</label>
                    <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" 
                    
                    placeholder="Enter email" required></input>
                    <span class="form-text text-muted">Enter your email. This won't be shared with anyone.</span>
                    
                    <label for='message'>Message:</label>
                    <input type="text" name="message" id="message"
                        class="form-control"
                        placeholder='Enter message'
                        required
                    ></input>
                    <span class="form-text text-muted">Enter your message</span>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

}