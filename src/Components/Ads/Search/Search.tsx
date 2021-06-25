import 'antd/dist/antd.css';
import {Form, Select} from 'antd';
import styles from "./Search.module.css"
import Search from "antd/lib/input/Search";
import {useDispatch} from "react-redux";
import {getAllAds} from "../../../Redux/Reducers/AdsReducer";

const {Option, OptGroup} = Select;

const SearchAds = () => {
    const dispatch = useDispatch()
    const onRubric = (rubric: string) => {
        if (rubric === 'null') dispatch(getAllAds(null, 1))
        else dispatch(getAllAds(Number(rubric), 1))
    }
    const onSearch = (search: string) => {
        dispatch(getAllAds(null, 1, search))
    }
    return <div className={styles.Search}>
        <Select defaultValue="Choose location" style={{width: 200}}>
            <OptGroup label="Cities">
                <Option value="Moscow">Moscow</Option>
                <Option value="Petersburg">St-Petersburg</Option>
                <Option value="Saratov">Saratov</Option>
                <Option value="Engels">Engels</Option>
                <Option value="Omsk">Omsk</Option>
                <Option value="Pizdulsk">Ust-Pizdulsk</Option>
            </OptGroup>
        </Select>
        <Select defaultValue="Choose category" style={{width: 200}} onChange={onRubric}>
            <OptGroup label="Categories">
                <Option value="2">Cars</Option>
                <Option value="3">Houses</Option>
                <Option value="null">All Ads</Option>
            </OptGroup>
        </Select>
        <Search placeholder={"Input search text"} onSearch={onSearch} enterButton style={{width: 600}}/>
    </div>
}


export default SearchAds

