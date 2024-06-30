
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : "rgb(232, 227, 227)", textAlign: 'center', position:'fixed', borderRadius: '10px', width: '50%',height : '85px', bottom : '10px', left: '50%', transform: 'translateX(-50%)', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                        Made by <a href="" style={{textDecoration : "none", color: "red"}}>Team 6556</a>
                    </h5>
            </div> 

            <div className="text-center pt-1">
                
                <a href="" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

            </div>

            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>
       
    )
}
