import React from 'react';

const Research = () => {
    const handlePaper = () =>{
        const link = document.createElement('a');
        link.href = 'https://www.infoq.com/research/javascript-frameworks-2015/?topicPageSponsorship=c9db3036-d671-4362-a73a-99b4ccf98a18?itm_source=infoqresearch&itm_campaign=r-dir';
         
        link.target = '_blank';
        link.click();
    }
    return (
        <div>
            <div>
                <h2 className=' text-3xl font-light text-center mt-10'>Our <span className='text-[#5800FF]'>Research</span></h2>
                <div className='flex w-full justify-center mt-4'>
                    <div>
                        <hr className='w-[80px] mx-auto border-1 border-black' />
                        <hr className='w-[80px] mx-auto border-1 border-black' />
                    </div>
                    <div>
                        <hr className='w-[80px] mx-auto border-1 border-[#5800FF]' />
                        <hr className='w-[80px] mx-auto border-1 border-[#5800FF]' />
                    </div>
                </div>
                <p className=' text-center text-[13px] text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cupiditate.</p>
            </div>

            {/* research card------------------------------------- */}
            <div className=' grid grid-cols-2 lg:grid-cols-5 lg:mx-20 gap-2 my-10'>
                {/* cart-1 */}
                <div className="card rounded-none p-2 hover:p-0 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/x2q3txW/6.png" alt="Shoes" /></figure>
                    
                        
                        <div className="card-actions">
                            <button onClick={handlePaper} className="btn hover:bg-[#5800FF] hover:text-white border border-[#5800FF] text-[#5800FF] w-full rounded-none">See Research Paper</button>
                        </div>
                    
                </div>
                {/* cart-1 */}
                <div className="card rounded-none p-2 hover:p-0 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VBgC2jh/5.png" alt="Shoes" /></figure>
                    
                        
                        <div className="card-actions">
                            <button onClick={handlePaper} className="btn hover:bg-[#5800FF] hover:text-white border border-[#5800FF] text-[#5800FF] w-full rounded-none">See Research Paper</button>
                        </div>
                    
                </div>
                {/* cart-1 */}
                <div className="card rounded-none p-2 hover:p-0 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/mBCsLzq/4.png" alt="Shoes" /></figure>
                    
                        
                        <div className="card-actions">
                            <button onClick={handlePaper} className="btn hover:bg-[#5800FF] hover:text-white border border-[#5800FF] text-[#5800FF] w-full rounded-none">See Research Paper</button>
                        </div>
                    
                </div>
                {/* cart-1 */}
                <div className="card rounded-none p-2 hover:p-0 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/5cNZh89/3.png" alt="Shoes" /></figure>
                    
                        
                        <div className="card-actions">
                            <button onClick={handlePaper} className="btn hover:bg-[#5800FF] hover:text-white border border-[#5800FF] text-[#5800FF] w-full rounded-none">See Research Paper</button>
                        </div>
                    
                </div>
                {/* cart-1 */}
                <div className="card rounded-none p-2 hover:p-0 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/jHQDwjx/2.png" alt="Shoes" /></figure>
                    
                        
                        <div className="card-actions">
                            <button onClick={handlePaper} className="btn hover:bg-[#5800FF] hover:text-white border border-[#5800FF] text-[#5800FF] w-full rounded-none">See Research Paper</button>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Research;