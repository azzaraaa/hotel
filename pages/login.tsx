import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
return (
    <>
      {/* navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#0f1730'}}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Boo-boo hotel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/register">Register</a>
              </li>
            </ul>
        </div>
        </div>
    </nav>

    <div className="loginF d-flex justify-content-center" style={{marginTop: '200px'}}>
        <div className="card p-3" style={{width: '28rem'}}>
            <form action='' method='POST'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {/* <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit</button> */}
                <a href="/booking" className="btn btn-primary" style={{width: '100%'}}>Submit</a>
            </form>
        </div>
    </div>

    <section style={{marginTop: '150px'}}>
        <footer className="text-center text-lg-start">
            <div className="text-center text-white p-3">
                <b>&#9400; 2022</b>
            </div>
        </footer>
    </section>
    </>
  )
}
