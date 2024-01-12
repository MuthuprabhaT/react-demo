import Card from "./Card"


function App() {

  let myprice = [
    {
      plan:"FREE",
      price:"$0/month",
      features:[
        {
          name:"Single User",
          isEnabled:true,
        },
        {
          name:"50GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:false,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:false,
        },
        {
          name:"Free Subdomain",
          isEnabled:false,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false,
        },
      ]
    },
    {
      plan:"PRO",
      price:"$9/month",
      features:[
        {
          name:"5 Users",
          isEnabled:true,
        },
        {
          name:"50GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true,
        },
        {
          name:"Free Subdomain",
          isEnabled:true,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false,
        },
      ]
    },
    {
      plan:"PRO",
      price:"$49/month",
      features:[
        {
          name:"Unlimited Users",
          isEnabled:true,
        },
        {
          name:"50GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true,
        },
        {
          name:"Free Subdomain",
          isEnabled:true,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:true,
        },
      ]
    }
  ]
 

  return (
    // <div className="container my-4 bg-primary mx-auto">
    //   <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {myprice.map((obj)=>(<Card data={obj}/>))}
    //   </div>
    // </div>
    // <>
    // {myprice.map((obj)=>(<Card data={obj}/>))}
    // </>

    <>
    <div className="pricing my-5 w-75 py-3 bg-primary container">
            <div className="row">
              
                {myprice.map((obj)=>(<Card data={obj}/>))}
              
            </div>
          </div>
    </>
    
  )
}

export default App
