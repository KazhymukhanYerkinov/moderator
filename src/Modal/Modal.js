import React from 'react';
import cls from './Modal.module.css';


const Modal = () => {
    return (
        <div className={ cls.modal } id="modal">
            <div className = { cls.modal__inner }>
                <div className = {cls.modal__text} >
                    Вы успешно зарегистрировались. Теперь вы можете перейти на страницу администратора. Удачи в работе :)
                </div>
                <a href="http://185.146.3.44/admin/"> <button className = {cls.success}> Войти </button> </a>
            </div>
        </div>
    )
}

export default Modal;