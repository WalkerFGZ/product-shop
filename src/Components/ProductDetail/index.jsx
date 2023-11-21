import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    return (
        <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>Details</h2>
                <div>
                    <XMarkIcon className="h-6 w-6t text-dark cursor-pointer"></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail