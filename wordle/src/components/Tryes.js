// take one try by the length of the array
import Try from './Try'

const Tryes = () => {
  const arr = [0, 1, 2, 3, 4, 5]
	return (
		<div className='tryes'>
      {
        arr.map((el, turn) => {
          return (
            <Try turn={turn} key={turn} />
          )
        })
      }
		</div>
	)
}


export default Tryes 

