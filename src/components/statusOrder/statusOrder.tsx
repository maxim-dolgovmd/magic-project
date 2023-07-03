import { Order } from "@/components/redux/slices/addCartSlice";
import React from "react";
import styled from "styled-components";

const ReadiOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextStatus = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const ReadyStatus = styled.ul`
  color: #00cccc;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


type StatusTypeProps = {
  order: Order[],
  status: string,
}

const StatusOrder: React.FC<StatusTypeProps> = (props) => {
    console.log(props)
    return (
        <ReadiOrder>
            <TextStatus>{props.status}:</TextStatus>
            <ReadyStatus>
                <li>{props.order?.[0]?.order_number}</li>
            </ReadyStatus>
        </ReadiOrder>
    )
}

export default StatusOrder;
