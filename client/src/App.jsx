//import { useState } from 'react'

function App() {

  return (
    <div className="wrapper">
        <header>
            <div className="company">
                <div className="company-logo">
                    <img src="/assets/logo.svg" alt="logo"/>
                </div>
                <div className="company-title">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="hud">
                <div className="cart">
                    <img src="/public/assets/header/cart.svg" alt="cart"/>
                    <p>1205 руб.</p>
                </div>
                <div className="starred">
                    <img src="/public/assets/header/profile.svg" alt="starred"/>
                    <p>Закладки</p>
                </div>
                <div className="profile">
                    <img src="/public/assets/header/profile.svg" alt="profile"/>
                    <p>Профиль</p>
                </div>
            </div>
        </header>
        <main>
            <div className="goods">
                <h1>Все кроссовки</h1>
                <div className="card">
                    <div className="item-pic">
                            <img src="/public/assets/cards/nikegreen.svg" alt="item"/>
                    </div>
                    <div className="item-title">
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    </div>
                    <div className="item-footer">
                        <div className="item-price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="button-add">
                            <button>
                                <img src="/public/assets/cards/add.svg" alt="add"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default App
