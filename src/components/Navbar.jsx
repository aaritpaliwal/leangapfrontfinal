import React from "react"




export default function Navbar(props) {





    return (
        
        <>


        <div className="navbar sticky top-0 left-0 w-full p-5 bg-base-300 z-10" data-theme="forest">
            <div className="flex-1">
                <a href="/" className="btn btn-primary btn-ghost btn-lg">
                    <p className="font-1 text-4xl font-bold">Incepta</p>
                </a>
               
            </div>

            <div className="flex-0">
                <div className="w-full font-2 text-2xl flex flex-row gap-4 items-center justify-items-center"> 
                    <div className="btn btn-ghost">
                        <p>About us</p>
                    </div>
                    <div className="btn btn-ghost">
                        <p>What we do</p>
                    </div>
                    <a href="/pricing" className="btn btn-ghost">
                        <p>Pricing</p>
                    </a>
                    <a href="/login">
                    <div className="btn btn-accent font-1 text-lg">
                        <p>Login</p>

                    </div>
                    </a>
                    
                </div>
            </div>
        </div>



        




        </>
    )
}


