export const deletePost = (id) => {
	console.log(id)
	return {
		type:'DELETE',
		payload: id
	}
}