import Try from './Try'

const Tryes = (props) => {
	const {userWord, i, direction, delOwn} = props
  const arr = [0, 1, 2, 3, 4, 5]
	return (
		<div className='tryes'>
      {
        arr.map((el, i) => {
          return (
            <Try i={i} key={i} />
          )
        })
      }
		</div>
	)
}


export default Tryes 

