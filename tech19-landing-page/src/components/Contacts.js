const Contacts = () => {
	return (
		<div className='contacts'>
			<div className='contactList'>
				<div className='contactDiv'>
					<i class="fab fa-linkedin linkedin"></i>
					<p className='contactP'>Linkdin</p>
				</div>
				<div className='contactDiv'>
					<i class="fab fa-facebook-square face"></i>
					<p className='contactP'>Facebook</p>
				</div>
				<div className='contactDiv'>
					<i class="fas fa-envelope email"></i>
					<p className='contactP'>Email</p>
				</div>
				<div className='contactDiv'>
					<i class="fab fa-twitter-square twiter"></i>
					<p className='contactP'>Twiter</p>
				</div>
			</div>
		</div>
	)
}

export default Contacts