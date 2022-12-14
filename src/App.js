import {subscribeToTimer, sendForm} from './api';
import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        subscribeToTimer((err, data) => {this.setState({data:JSON.parse(data)})
            console.log(this.state);
            });
        console.log(this.state);
    };

    state = {
        data: {

            "error":false,
            "data":{
               "ready_state":{
                  "dealer":false,
                  "hedger":false,
                  "maker":false,
                  "taker":false
               },
               "balances":{
                  "maker":{
                     "name":"Leverex",
                     "_timestamp":1670911088129.3293,
                     "balances":{
                        "USDT":40.27385,
                        "USDP":8.5934
                     },
                     "ccy":"USDT"
                  },
                  "taker":{
                     "name":"Bitfinex",
                     "_timestamp":1670911088129.3547,
                     "ccy":"TESTUSDTF0",
                     "balances":{
                        "margin":{
                           "TESTUSDTF0":{
                              "total":30010.61809796453,
                              "free":30004.89743129453,
                              "reserved":5.720666670000355
                           },
                           "AAA":{
                              "total":9000,
                              "free":9000,
                              "reserved":0
                           },
                           "BBB":{
                              "total":10000,
                              "free":10000,
                              "reserved":0
                           },
                           "TESTBTC":{
                              "total":4,
                              "free":4,
                              "reserved":0
                           }
                        },
                        "exchange":{
                           "AAA":{
                              "total":1000,
                              "free":1000,
                              "reserved":0
                           },
                           "TESTUSD":{
                              "total":8898.8,
                              "free":8898.8,
                              "reserved":0.0
                           },
                           "TESTBTC":{
                              "total":0.0998,
                              "free":0.0998,
                              "reserved":0.0
                           }
                        }
                     }
                  }
               },
               "positions":{
                  "maker":{
                     "name":"Leverex",
                     "netExposure":0.005,
                     "_timestamp":1670911155217.4775,
                     "indexPrice":17194.67,
                     "orderData":{
                        "id":1670910604108,
                        "orders":{
                           "110270":{
                              "_id":"110270",
                              "_timestamp":1670910604,
                              "_quantity":0.005,
                              "_price":17186.8,
                              "_side":1,
                              "_status":1,
                              "_product_type":"xbtusd_rf",
                              "_trade_pnl":0.03934999999999491,
                              "_reference_exposure":"0.005",
                              "_session_id":1670910604108,
                              "_rollover_type":1,
                              "_fee":-0.075,
                              "_is_taker":true,
                              "indexPrice":17194.67,
                              "sessionIM":1718.6799999999998
                           }
                        },
                        "netExposure":0.005,
                        "session":{
                           "open":{
                              "product_type":"xbtusd_rf",
                              "cut_off_at":"2022-12-13 11:30:00",
                              "last_cut_off_price":17186.8,
                              "session_id":1670910604108,
                              "previous_session_id":"1670910003760"
                           },
                           "close":null
                        }
                     }
                  },
                  "taker":{
                     "name":"Bitfinex",
                     "netExposure":-0.005,
                     "_timestamp":1670911155217.5242,
                     "product":"tTESTBTCF0:TESTUSDTF0",
                     "positions":{
                        "tTESTBTCF0:TESTUSDTF0":{
                           "157895580":{
                              "position":{
                                 "symbol":"tTESTBTCF0:TESTUSDTF0",
                                 "status":"ACTIVE",
                                 "amount":-0.005,
                                 "base_price":17162,
                                 "margin_funding":0.0025,
                                 "margin_funding_type":0,
                                 "profit_loss":-0.125,
                                 "profit_loss_percentage":-0.1454672407773769,
                                 "liquidation_price":18220.323334,
                                 "leverage":14.999999991259761,
                                 "id":157895580,
                                 "mts_create":null,
                                 "mts_update":null,
                                 "type":1,
                                 "collateral":5.72066667,
                                 "collateral_min":0.8581000000000001,
                                 "meta":{
                                    "reason":"TRADE",
                                    "order_id":109945958611,
                                    "order_id_oppo":109983692738,
                                    "liq_stage":null,
                                    "trade_price":"17165.0",
                                    "trade_amount":"0.005",
                                    "order_cid":1670909729733,
                                    "order_gid":null
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            },
            "reason":null
         }
    };

    toDate(timestamp){
       return  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
    }

    render() {
        return (
            
            <div className="App">
                            <style>{`
                table{
                border:1px solid black;
                }
            `}</style>
                <p className="App-intro">Dealer status reporter  </p>
                <p className="App-intro">Balances : </p>

                <div className='rows'>
                    <div className='row'>   
                        <table border="1" id="cssTable"> 
                            <thead>
                                <tr>
                                <td colSpan="3" >Maker</td>
                                </tr>
                                <tr>
                                <td colSpan="3" >
                                    <img src="https://www.crypto-reporter.com/wp-content/uploads/2022/01/Untitled-1.jpg" width="200"></img></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{
                                textAlign:"center"
                                    }}>
                                        Maker balances:
                                    </td>
                                    <td>
                                        USDT:
                                        {this.state.data.data.balances.maker.balances.USDT}
                                    </td>
                                    <td>
                                        USDP:
                                            {this.state.data.data.balances.maker.balances.USDP}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Currency:
                                    </td>
                                
                                    <td>
                                    
                                            {this.state.data.data.balances.maker.ccy}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Timestamp:
                                    </td>
                                
                                    <td>
                                    
                                            {this.toDate(this.state.data.data.balances.taker._timestamp)}
                                    </td>
                                </tr>
                            
                                        
                            </tbody>
                        </table>
                    </div>
                    <div className='row'>
                    <table border="1" id="cssTable" > 
                            <thead >
                                <tr >
                                <td colSpan="4" >Taker</td>
                                </tr>
                                <tr>
                                <td colSpan="4" >
                                    <img src="https://blog.bitfinex.com/wp-content/uploads/2021/03/Bitfinex_new-logo_colour-1-1.png" width="200"></img></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
              

                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="3"> TESTUSDTF0:
                                                    </td>
                                                  
                                                </tr>
                                                <tr>
                                                    <td> Total: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTUSDTF0.total}
                                                    </td>
                                                    <td> Free: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTUSDTF0.free}
                                                    </td>
                                                    <td> Reserved: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTUSDTF0.reserved}
                                                    </td>
                                          
                                                </tr>
                                            </tbody>
                                        </table>
                                    
                                    </td>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="3"> AAA:
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td> Total: 
                                                        {this.state.data.data.balances.taker.balances.margin.AAA.total}
                                                    </td>
                                                    <td> Free: 
                                                        {this.state.data.data.balances.taker.balances.margin.AAA.free}
                                                    </td>
                                                    <td> Reserved: 
                                                        {this.state.data.data.balances.taker.balances.margin.AAA.reserved}
                                                    </td>
                                            
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="3"> BBB:
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td> Total: 
                                                        {this.state.data.data.balances.taker.balances.margin.BBB.total}
                                                    </td>
                                                    <td> Free: 
                                                        {this.state.data.data.balances.taker.balances.margin.BBB.free}
                                                    </td>
                                                    <td> Reserved: 
                                                        {this.state.data.data.balances.taker.balances.margin.BBB.reserved}
                                                    </td>
                                            
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="3"> TESTBTC:
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td> Total: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTBTC.total}
                                                    </td>
                                                    <td> Free: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTBTC.free}
                                                    </td>
                                                    <td> Reserved: 
                                                        {this.state.data.data.balances.taker.balances.margin.TESTBTC.reserved}
                                                    </td>
                                            
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Currency:
                                    </td>
                                
                                    <td>
                                    
                                            {this.state.data.data.balances.taker.ccy}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Timestamp:
                                    </td>
                                
                                    <td>
                                    
                                            {this.toDate(this.state.data.data.balances.taker._timestamp)}
                                    </td>
                                </tr>
                            
                                        
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="App-intro">Positions : </p>

                <div className='rows'>
                    <div className='row'>   
                        <table border="1" id="cssTable"> 
                            <thead>
                                <tr>
                                <td colSpan="3" >Maker</td>
                                </tr>
                                <tr>
                                <td colSpan="3" >
                                    <img src="https://www.crypto-reporter.com/wp-content/uploads/2022/01/Untitled-1.jpg" width="200"></img></td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td colSpan="2">
                                        Net exposure:
                                    </td>
                                
                                    <td>
                                    
                                    {this.state.data.data.positions.maker.netExposure}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Index price:
                                    </td>
                                
                                    <td>
                                    
                                            {this.state.data.data.positions.maker.indexPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                    Timestamp:
                                    </td>
                                
                                    <td>
                                    
                                            {this.toDate(this.state.data.data.positions.maker._timestamp)}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                textAlign:"center"
                                    }}>
                                        Order data:
                                    </td>
                                    <td colSpan="2">
                                        <pre>{JSON.stringify(this.state.data.data.positions.maker.orderData, null, 2)}</pre>

                                    </td>
                                </tr>
                            
                                        
                            </tbody>
                        </table>
                    </div>
                    <div className='row'>
                    <table border="1" id="cssTable"> 
                            <thead>
                                <tr>
                                <td colSpan="4" >Taker</td>
                                </tr>
                                <tr>
                                <td colSpan="4" >
                                    <img src="https://blog.bitfinex.com/wp-content/uploads/2021/03/Bitfinex_new-logo_colour-1-1.png" width="200"></img></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        Product:
                                    </td>
                                
                                    <td>
                                    
                                            {this.state.data.data.positions.taker.product}
                                    </td>
 
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Net exposure:
                                    </td>
                                
                                    <td>
                                    
                                       {this.state.data.data.positions.taker.netExposure}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Timestamp:
                                    </td>
                                
                                    <td>
                                    
                                            {this.toDate(this.state.data.data.positions.taker._timestamp)}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                    textAlign:"center"
                                        }}>
                                            Order data:
                                        </td>
                                        <td colSpan="2">
                                            <pre>{JSON.stringify(this.state.data.data.positions.taker.positions, null, 2)}</pre>

                                    </td>
                                </tr>
                            
                                        
                            </tbody>
                        </table>
                    </div>
                </div>
        
            </div>
        );
    };
    
}
 

export default App;
