import React, { Component } from 'react';
import './App.css';


class InformList extends Component {
    render() {
        return (
        <div className="Information">
                    
            <li>О нас</li>
            <p>Наша компания начала свою деятельность на компьютерном рынке под 
                торговой маркой ClickStore.kg в 2020 году. Наша специализация - 
                это розничная мелкооптовая торговля комплектующими, смартфонами, компьютерами,
                различной электроникой и техникой.</p> 
            
            <p>Информация на сайте ClickStore.kg обновляется каждый день и отображаются 
                товары, которые есть в наличии (за исключением тех случаев, когда товар 
                закончился сегодня и не успела обновиться информация на сайте).
                Администрация делает все возможное чтобы донести до потребителя максимально 
                точную информацию о товаре.</p> 
           
            <p>Мы предлагаем своим клиентам широкий выбор качественных товаров по самым
                привлекательным ценам. Являясь динамично развивающейся компанией, основные
                усилия мы направляем на постоянное совершенствование обслуживания покупателей
                и постоянное снижение издержек поставки товара к конечному потребителю, тем самым
                делая товар еще доступней для потребителя.</p> 

            <p>Наша компания ориентируется на корпоративных клиентов и на розничных покупателей.
                Вы всегда сможете найти у нас как самые последние новинки электронного рынка, 
                так и надежные решения выбора электронники и техники для корпоративного сектора.</p>

            <p>Наша цель: помочь максимальному количеству людей сделать выбор среди огромного 
                ассортимента электроники и техники с наилучшим сочетанием Цена -
                Качество, получения удовольствия от приобретения товара и дальнейшее долгое и
                приятное использование приобретенной продукции.</p>
                
            <li>Наш адрес:</li>
            <p>город Бишкек, ул.Исанова 105/3</p>

            <li>Контакты:</li>
            <p>+996555555555 <button onCanPlayCapture>Позвонить</button></p>
            <p>+996312312312 <button>Позвонить</button></p>
            <ul class="social-icons">
                <li><a href="https://www.whatsapp.com"><img src="https://image.flaticon.com/icons/svg/124/124034.svg"/></a></li>
                <li><a href="http://www.viber.com"><img src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504948.svg"/></a></li>
                <li><a href="https://telegram.org/"><img src="https://image.flaticon.com/icons/svg/2111/2111646.svg"/></a></li>
            </ul>
            <li>Наши социальные сети:</li>
             <ul class="social-icons">
                <li><a href="http://www.facebook.com"><img src="https://image.flaticon.com/icons/svg/733/733547.svg"/></a></li>
                <li><a href="http://www.vkontakte.ru"><img src="https://www.flaticon.com/premium-icon/icons/svg/2190/2190383.svg"/></a></li>
                <li><a href="http://www.twitter.com"><img src="https://image.flaticon.com/icons/svg/1409/1409937.svg"/></a></li>
                <li><a href="http://www.instagramm.com"><img src="https://image.flaticon.com/icons/svg/408/408758.svg"/></a></li>
             </ul>

            <li>Заказы. СМИ. Реклама <button>Заказать</button>
            {/* <li><a href="http://www.instagramm.com"><img src="https://ibb.co/K61m2Fs"/></a></li> */}
            </li>
            
                </div>   
                  
        );
    }
}

export default InformList;