// take one try by the length of the array
import Try from './Try'

const Tries = () => {
  const arr = [0, 1, 2, 3, 4, 5]
	return (
		<div className='tries'>
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


export default Tries 

