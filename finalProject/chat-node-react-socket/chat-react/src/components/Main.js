const Main = (props) => {
	const {saveSendNum, saveSendName, add, sendMessage} = props
	return (
		<div className='main'>
			<div className= 'section'>
				<div className='contacts'>
					<div className='addDiv'>
						<div className='addInputs'>
	      					<input onChange={saveSendNum} type="number" name="sendInputNumber" placeholder="phone number" className="sendInputNumber"/>
	      					<input onChange={saveSendName} type="text" name="sendInputName" placeholder="name" className="sendInputName"/>
						</div>
						<button onClick={add} className='addBtn' >+</button>
					</div>
					<div className='contactList'>
					</div>
				</div>
				<div className='conversationDiv'>
					<div className='conversation'>
					</div>
					<div className='sendMessageDiv'>
						<input onKeyDown={sendMessage} id='messageInput' type='text' placeholder='Type your message' autocomplete="off"/>
						<button onClick={sendMessage} className='sendMessageBtn'><span data-testid="send" data-icon="send" className='planeSpan'><svg className="plane" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button>
					</div>
				</div>
			</div>
		</div>
	)
}	
export default Main