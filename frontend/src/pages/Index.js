import GiftRequestList from '../components/GiftRequestList';
import Subheader from '../components/Subheader'

export default function Index() {

    return (
        <>
            <Subheader text="Gift Requests" />
            <GiftRequestList />
        </>
    )
}