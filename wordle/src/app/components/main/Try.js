import TryLetter from './TryLetter'

const Try = (props) => {
	const {turn} = props
  const arr = [0, 1, 2, 3, 4]

	return (
    <div className={`try try${turn}`}>
      {
        arr.map((el, i) => {
          return (
            <TryLetter turn={turn} i={i} key={i} />
          )
        })
      }
    </div>
	)
}

export default Try

