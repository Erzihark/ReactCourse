import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
import TodoData from "./data/checkData"
import ContactCard from "./components/ContactCard"
//import Me from "./images/Manuel.jpg"
import ContactData from "./data/contactData"
import ButtonIncrease from "./components/ButtonIncrease"


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            toDoListData: TodoData
        }
    }

    render() {
        
        const styles = {
            color: "rgb(143, 187, 153)",
            backgroundColor: "rgb(89, 90, 74)"
        }
        
        const contactCardData = ContactData.map(data => <ContactCard key={data.id} card={data} />)
        const checkStatus = this.state.toDoListData.map(data => <TodoItem key={data.id} status={data} content={data}/>)

        return (
          <div style={styles}>
              <Header />
          <div>
              <ButtonIncrease />
          </div>

              <div>
                  {contactCardData}
              </div>
              <MainContent/>  
             <div className="todo-list">
                 {checkStatus}
             </div>   
             <Footer />
            
           </div>
        )
    }
}

export default App

/*function App() {
    const styles = {
        color: "crimson",
        backgroundColor: "darkkhaki"
    }

    const contactCardData = ContactData.map(data => <ContactCard key={data.id} email={data.email} 
                                            name={data.name} phone={data.phone} url={data.url} />)

    const contactCardData = ContactData.map(data => <ContactCard key={data.id} card={data} />)

    return (
        <div style={styles}>
            <Header />
            <div>
                {contactCardData}
            </div>
            {<ContactCard
                name="Manuel Carretero"
                imgUrl={Me}
                phone="2221888266"
                email="manuelalejandrosac@gmail.com"
            />
            <ContactCard
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />}
            <MainContent/>  
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>   
            <Footer />
            
        </div>
    )
}*/

