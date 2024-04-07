import { getMyChannel, loginApi, registerApi } from "@actions/auth"
import { createError, login, logout, register, subscribe, unsubscribe } from "@store/authSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resizeImage } from "@firebase/resize";
import { subscribeAPi } from "@actions/video";
import { subscribeLength, unsubscribeLength } from "@store/videoSlice";
import { useRouter } from "next/navigation";

const useAuth = () => {
    const dispatch = useDispatch()
    const { user, isError } = useSelector(state => state.auth)
    const [image_url, setImage_url] = useState('')
    const [auth, setAuth] = useState(true);
    const router = useRouter()
    const [error, setError] = useState(false)

    const newUser = user?.newUser
    const token = user?.token

    const Login = (gmail, password) => {
        if (gmail && password) {
            loginApi(gmail, password).then((res) => {
                dispatch(login(res?.data))
                localStorage.setItem('user', JSON.stringify(res?.data))
            }).catch(err => {
                dispatch(createError(err?.response?.data?.error))
            })
        } else {
            setError("შეავსეთ ყველა ინფუთი")
        }
    }

    const Register = (gmail, name, password, image) => {
        if (gmail && name && password && image) {
            registerApi(gmail, name, password, image).then((res) => {
                dispatch(register(res?.data))
                localStorage.setItem('user', JSON.stringify(res?.data))
            }).catch(err => {
                dispatch(createError(err?.response?.data?.error))
            })
        } else {
            setError("შეავსეთ ყველა ინფუთი")
        }
    }

    const Logout = () => {
        dispatch(logout())
        localStorage.removeItem('user')
        window.location.reload()
    }

    const handelUploadProfile = async (e) => {
        const profile_image = await resizeImage(
            e.target.files[0],
            150,
            150,
            "base64"
        );

        setImage_url(profile_image)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const gmail = e.target[1].value;
        const password = e.target[2].value;

        if (auth) {
            Register(gmail, name, password, image_url);
        } else {
            Login(gmail, password);
        }
    };

    const handleSubscribe = async (id) => {
        await subscribeAPi(id, token)

        if (newUser._id == id) {
            return
        } else if (!newUser.subscribed.includes(id)) {
            dispatch(subscribe(id))
            dispatch(subscribeLength(id))
        } else {
            dispatch(unsubscribe(id))
            dispatch(unsubscribeLength(id))
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            getMyChannel(user.newUser._id).then(res => {
                dispatch(login(res.data))
            }).catch(err => {
                console.log(err);
            })
        } else if (!user) {
            router.push('/')
        }
    }, [dispatch, router])

    return { Login, newUser, error, token, Register, Logout, isError, handelUploadProfile, handleSubmit, setAuth, auth, handleSubscribe }
}

export default useAuth
