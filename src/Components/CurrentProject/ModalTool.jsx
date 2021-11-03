import modalClose from "../../icons/svg/close_icon.svg"
// import header from "../../img/img_modal_actvidad.png"
import serviceIcon from "../../icons/svg/service_icon.svg";

const Modal = ({ isOpen, closeModal }) => {
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container">
                <span className="header-modal">
                <button className='modal-close' onClick={closeModal}><img src={modalClose} className="close-modal" alt="close" /></button>
                </span>
                <div className='activitiy-modal'>
                <div className='modal-activity'>
                    <img src={serviceIcon} className="modal-tag" alt="tag" />
                    <h1>Restauración ecológica</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi
                    impedit sint enim atque suscipit est saepe et eveniet facere itaque,
                    quidem quaerat debitis amet ipsam tenetur quam quas temporibus?</p>
                <h2>¿Cómo lo hacemos?</h2>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit necessitatibus ipsum architecto!</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit necessitatibus ipsum architecto!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi eaque atque odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod.</li>
                <span className='buttons'>
                    <button className='propose-project'>PROPONE UN PROYECTO</button>
                    <button className='see-projects'>VER LOS PROYECTOS</button>
                </span>
                </div>

            </div>
        </article>
    );
};

export default Modal;