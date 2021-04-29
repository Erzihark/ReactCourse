import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
import ContactCard from "./components/ContactCard"
//import Me from "./images/Manuel.jpg"
import ContactData from "./data/contactData"


function App() {
    const styles = {
        color: "crimson",
        backgroundColor: "darkkhaki"
    }

    /*const contactCardData = ContactData.map(data => <ContactCard key={data.id} email={data.email} 
                                            name={data.name} phone={data.phone} url={data.url} />)
*/
    const contactCardData = ContactData.map(data => <ContactCard key={data.id} card={data} />)

    return (
        <div style={styles}>
            <Header />
            <div>
                {contactCardData}
            </div>
            {/*<ContactCard
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
            />*/}
            <MainContent/>  
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>   
            <Footer />
            
        </div>
    )
}

export default App