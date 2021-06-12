import 'antd/dist/antd.css';
import {Select} from 'antd';
import styles from "./Search.module.css"
import Search from "antd/lib/input/Search";

const {Option, OptGroup} = Select;

function handleChange(value: string) {
    console.log(`selected ${value}`);
}

const SearchAds = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    return <div className={styles.Search}>
        <Select defaultValue="Choose location" style={{width: 200}} onChange={handleChange}>
            <OptGroup label="Cities">
                <Option value="jack">Moscow</Option>
                <Option value="lucy">St-Petersburg</Option>
                <Option value="jack">Saratov</Option>
                <Option value="lucy">Engels</Option>
                <Option value="jack">Omsk</Option>
                <Option value="lucy">Ust-Pizdulsk</Option>
            </OptGroup>
        </Select>
        <Select defaultValue="Choose category" style={{width: 200}} onChange={handleChange}>
            <OptGroup label="Categories">
                <Option value="jack">Cars</Option>
                <Option value="lucy">Houses</Option>
                <Option value="jack">Niggers</Option>
            </OptGroup>
        </Select>
        <Search placeholder={"Input search text"} onSearch={onSearch} enterButton style={{width: 600}}/>
    </div>
}


export default SearchAds

