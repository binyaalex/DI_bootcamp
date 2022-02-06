const Result = (props) => {
	return (
		<div className='resultPage'>
			<h5>Result</h5>
			<div className='resultSquers'>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
				<div className='resultLine'>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
					<div className='resultSquer'></div>
				</div>
			</div>
		</div>
	)
}
export default Result

let allsum = 0
let notallsum = 0 
for (let i = 0; i < arr.length; i++) {
	allsum = allsum + i + 1
	notallsum = notallsum + arr[i]
}
allsum = allsum + 10
console.log(allsum - notallsum)