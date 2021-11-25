import Item from './Item'
import Row from 'react-bootstrap/Row';

const check = () => {
  console.log('ggod4')
}
const Cardlist = (props) => {
	const {arr, choose} = props;
		let randomArr = []
		for (let i = 0; i < 12; i++) {
			let d = Math.floor(Math.random() * 12)
			while (randomArr.includes(d)) {
				d = Math.floor(Math.random() * 12)
			}
			randomArr.push(d)
		}

	
	return (
		<>
			<Row style={{ display: 'flex', flexWrap:'wrap' }}>
				{
					randomArr.map((element, i, array) => {
						return (
							<>
							<Item choose={choose} hero={arr[element]} key={i}/>		
        					</>
						)				
					})
				}
			</Row>
		</>
	)
}
export default Cardlist