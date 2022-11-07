import { About, Button, CategoryItems } from '../../components'
import { Jumbotron } from './components'
import { ReactComponent as Pattern } from '../../assets/home/desktop/pattern-circles.svg'
import zx9Speaker from '../../assets/home/desktop/image-speaker-zx9.png'
import zx7Speaker from '../../assets/home/desktop/image-speaker-zx7.jpg'
import yx1Earphones from '../../assets/home/desktop/image-earphones-yx1.jpg'

import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Jumbotron />
            <CategoryItems className='pb-[168px]' />
            <section className='container'>
                <div
                    style={{ gridTemplateColumns: 'minmax(455px, 1fr) 1fr' }}
                    className='relative mb-12 grid gap-x-[138px] overflow-hidden rounded-lg bg-Orange-dark px-[95px] pt-[96px] text-white'
                >
                    <Pattern className='absolute -left-[149px] -top-[36px] z-0 h-[944px] w-[944px]' />
                    <div className='z-[1] ml-[45.5px] w-[410px]'>
                        <img
                            className='relative -bottom-[16px]'
                            src={zx9Speaker}
                            alt='zx9 speaker'
                        />
                    </div>
                    <div className='z-[1] pt-[26px]'>
                        <span className='inline-block pb-6 pr-[88px] text-[3.5rem] font-bold uppercase leading-[3.625rem] tracking-[0.125rem]'>
                            ZX9 SPEAKER
                        </span>
                        <p className='pb-10'>
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Button
                            type='primary'
                            className='!bg-black hover:!bg-[#4C4C4C]'
                        >
                            see product
                        </Button>
                    </div>
                </div>
                <div
                    className='mb-12 rounded-lg py-[101px] px-[95px]'
                    style={{ backgroundImage: `url(${zx7Speaker})` }}
                >
                    <span className='mb-8 inline-block text-[28px] font-bold leading-[auto] tracking-[2px] text-black'>
                        ZX7 SPEAKER
                    </span>
                    <Button
                        type='secondary'
                        onClick={() => navigate('/')}
                    >
                        see product
                    </Button>
                </div>
                <div className='mb-[200px] grid grid-cols-2 gap-[30px]'>
                    <div
                        className='rounded-lg bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${yx1Earphones})` }}
                    ></div>
                    <div className='rounded-lg bg-Blue-light py-[101px] px-[95px]'>
                        <span className='mb-8 inline-block text-[28px] font-bold leading-[auto] tracking-[2px] text-black'>
                            YX1 EARPHONES
                        </span>
                        <Button
                            type='secondary'
                            onClick={() => navigate('/')}
                        >
                            see product
                        </Button>
                    </div>
                </div>
            </section>
            <About className='pb-[200px]' />
        </>
    )
}
