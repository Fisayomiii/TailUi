const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-12">
                <a href="https://github.com/Fisayomiii/tailui" target="_blank" rel="noreferrer" className="hover:text-blue-700">
                    <div>Designed &amp; Built by Fisayomi</div>
                </a>
                <div className="social-links">
                    <ul className="flex justify-center items-center">
                        <li >
                            <a href="https://github.com/Fisayomiii/tailui" target="_blank" rel="noreferrer" className="flex items-center text-md p-5">
                                <i className='bx bx-star'></i>
                                <span className="ml-1">Star</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Fisayomiii/tailui" target="_blank" rel="noreferrer" className="flex items-center text-md">
                                <i className='bx bx-git-repo-forked'></i>
                                <span className="ml-1">Fork</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
