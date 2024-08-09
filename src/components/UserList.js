import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers, addUsers } from '../store';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button';
import axios from 'axios';

function UserList() {
    const dispatch = useDispatch();
    const { userList, isLoading, error } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    console.log(userList);
    const listToRender = userList.map((user) => {
        return <div key={user.id} className='mb-2 rounded border'>
            <div className='flex justify-between cursor-pointer items-center p-2'>
                {user.name}
            </div>
        </div>
    });
    const handleClick = () => {
        dispatch(addUsers());
    };

    return (
        <div>
            <div className='flex justify-between m-3'>
                <h1>User List</h1>
                <Button primary onClick={handleClick}>Add Users</Button>
            </div>
            <div>
                {isLoading && <SkeletonLoader times={3} className='h-10 w-full'></SkeletonLoader>}
                {error && <p>{error}</p>}
                {!isLoading && listToRender}
            </div>

        </div>
    );
}

export default UserList;