import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserData } from '../../store/reducers/ActionCreateUsers';
import './ProfileFormData.css'

interface Values {
    name: string;
    username: string;
    email: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
}

interface PropsType {
    id: string;
    editMode: boolean;
    seteditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileFormData = (props: PropsType) => {

    const dispatch = useAppDispatch()
    const { users } = useAppSelector(state => state.user)

    let user = users.find(i => i.id === +props.id)

    useEffect(() => {
        dispatch(getUserData())
    }, [])


    return (
        <>
            {user ? <Formik 
                initialValues={{
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                    phone: user.phone,
                    website: user.website,
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values));
                        props.seteditMode(true)
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <div className="fieldInfo">
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='name'>Name</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name='name' id='name' />
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='username'>User name</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'username' id='username'/>
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='email'>E-mail</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'email' id='email'/>
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='city'>City</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'city' id='city'/>
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='zipcode'>Zip-code</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'zipcode' id='zipcode'/>
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='phone'>Phone</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'phone' id='phone'/>
                        </div>
                        <div className='elemfieldInfoProfile'>
                            <label className='labelProfile' htmlFor='website'>Website</label>
                            <Field readOnly = {props.editMode} className= {props.editMode ? 'inputItemProfileActive': 'inputItemProfile'} name = 'website' id='website'/>
                        </div>
                        <div className='elemfieldInfoProfileComment'>
                            <label className='labelProfile' htmlFor='comment'>Comment</label>
                            <textarea className='inputItemProfileComment' id='comment'></textarea>
                        </div>
                    </div>
                    <button disabled = {props.editMode} className={props.editMode ? 'submitButton' : "submitButtonActive"} type="submit">Отправить</button>
                </Form>

            </Formik> : <div>Пользователь не найден</div>}
        </>
    )
}

export default ProfileFormData