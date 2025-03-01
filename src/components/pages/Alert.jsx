import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Alert() {
  return (
    <div>
           {/* strat content */}
                <div className="bg-gray-100 p-6 md:mt-16">
                    
                    <h1 className="h5">alerts</h1>
                <p>Use cleopatra custom alerts styles for actions , notifcations etc.</p>
                <p>so far there's just 3 type of alerts feel free to submit a pull request</p>
                <hr className="my-5" />
                <div className="card">

                    <div className="card-header">
                            simple alert - you can always use <span className="badge badge-primary">.alert</span> className along with <span className="badge badge-primary">.alert-(type)</span>
                    </div>

                    <div className="card-body">        
                        
                        <div className="alert mb-5">
                            A simple alert it out!!
                        </div>

                        <div className="alert alert-default mb-5">
                            A simple alert it out!
                        </div>        

                        <div className="alert alert-light mb-5">
                            A simple alert it out!
                        </div>

                        <div className="alert alert-dark mb-5">
                            A simple alert it out!
                        </div>

                        <div className="alert alert-success mb-5">
                            A simple alert it out!
                        </div>

                        <div className="alert alert-error">
                            A simple alert it out!
                        </div>

                    </div>
                    <div className="card-footer">
                        <script type="text/plain" className="language-html">
                            <div className="alert mb-5">
                                A simple alert it out!
                            </div>
                    
                            <div className="alert alert-default mb-5">
                                A simple alert it out! 
                            </div>        
                    
                            <div className="alert alert-light mb-5">
                                A simple alert it out!
                            </div>
                    
                            <div className="alert alert-dark mb-5">
                                A simple alert it out!
                            </div>
                    
                            <div className="alert alert-success mb-5">
                                A simple alert it out!
                            </div>
                    
                            <div className="alert alert-error">
                                A simple alert it out!
                            </div>
                        </script>
                    </div>


                </div>
    </div>
    </div>
  )
}

export default Alert