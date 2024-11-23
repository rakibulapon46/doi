const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, title, links} = curUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td><a className="links" href={links} target="_blank">Click Here</a></td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;