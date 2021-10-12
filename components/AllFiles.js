import Icon from "@material-tailwind/react/Icon";


function AllFiles(){
    return(
        <div className="bg-white px-10 md:px-0">
            <div className="max-w-3xl mx-auto py-8">
                <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
                    <h2 className="font-medium flex-grow">My Documents</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon name="folder" size="3xl" color="gray"/>
                </div>
            </div>
        </div>
    );
}

export default AllFiles;