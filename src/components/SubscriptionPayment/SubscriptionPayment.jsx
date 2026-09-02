import {useState} from 'react';
import './SubscriptionPayment.css';

const formatCardNumber = (value) =>
    value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');

const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
};

const SubscriptionPayment = () => {
    const [card, setCard] = useState({number: '', expiry: '', cvc: '', name: ''});
    const [submitted, setSubmitted] = useState(false);

    const updateField = (field, value) => {
        setSubmitted(false);
        setCard((current) => ({...current, [field]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="subscription-payment" aria-labelledby="payment-title">
            <div className="payment-header">
                <p className="payment-label">Подписка</p>
                <h2 id="payment-title">Добавьте карту для оплаты</h2>
                <p className="payment-description">Доступ к домашней коллекции рецептов — 299 ₽ в месяц.</p>
            </div>

            <form className="payment-form" onSubmit={handleSubmit}>
                <label>
                    Имя на карте
                    <input
                        type="text"
                        name="cardholder"
                        value={card.name}
                        onChange={(event) => updateField('name', event.target.value)}
                        autoComplete="cc-name"
                        placeholder="IVAN IVANOV"
                        required
                    />
                </label>

                <label>
                    Номер карты
                    <input
                        type="text"
                        name="card-number"
                        value={card.number}
                        onChange={(event) => updateField('number', formatCardNumber(event.target.value))}
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="0000 0000 0000 0000"
                        maxLength="19"
                        required
                    />
                </label>

                <div className="payment-fields-row">
                    <label>
                        Срок действия
                        <input
                            type="text"
                            name="card-expiry"
                            value={card.expiry}
                            onChange={(event) => updateField('expiry', formatExpiry(event.target.value))}
                            inputMode="numeric"
                            autoComplete="cc-exp"
                            placeholder="ММ/ГГ"
                            maxLength="5"
                            required
                        />
                    </label>
                    <label>
                        CVC
                        <input
                            type="password"
                            name="card-cvc"
                            value={card.cvc}
                            onChange={(event) => updateField('cvc', event.target.value.replace(/\D/g, '').slice(0, 4))}
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            placeholder="•••"
                            maxLength="4"
                            required
                        />
                    </label>
                </div>

                <button type="submit" className="payment-submit">Оплатить подписку</button>
                {submitted && <p className="payment-success" role="status">Карта готова к проверке.</p>}
            </form>
        </section>
    );
};

export default SubscriptionPayment;
