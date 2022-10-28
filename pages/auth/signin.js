import { getProviders, signIn } from 'next-auth/react'

export default function Signin({ providers }) {
    console.log('Providers', Object.values(providers));
    return (
        <div className='flex justify-center mt-20 space-x-4'>
            <img className='object-cover md:inline-flex md:w-44 md:h-80 rotate-6 hidden'
                src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findtimeline.png.twimg.1920.png' />
            <div>
                {Object.values(providers).map(provider =>
                    <div className='flex flex-col items-center mt-10'>
                        <img className='w-24 object-cover' src='https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png' alt='twitter logo' />
                        <p className='my-10 italic text-sm'>This app is created for learning purposses</p>
                        <button onClick={() => signIn(provider.id, { callbackUrl: '/' })} className='rounded-lg bg-red-400 p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers,
        }
    }
}