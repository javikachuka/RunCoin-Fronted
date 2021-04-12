export const CONST_ABI = [{
		"inputs": [{
			"internalType": "address",
			"name": "contract_governance",
			"type": "address"
		}],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "owner_play",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "wait",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "seasson",
				"type": "uint256"
			}
		],
		"name": "Game",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cant",
				"type": "uint256"
			}
		],
		"name": "Winner",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cant",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "WinnerOfToken",
		"type": "event"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "_second",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_valMax",
				"type": "uint256"
			}
		],
		"name": "addTime",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "calcTotalSeasson",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cantDays",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cantDaysCurrent",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cantPlayForSeasson",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "cantTokenGForOwner",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cantTokenGovernance",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimLastPlayer",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "claimOrgPool",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "claimWinnerSeassonPool",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cost",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentSeasson",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "div",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "donation",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_second",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_valMax",
				"type": "uint256"
			}
		],
		"name": "editTime",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_value",
			"type": "uint256"
		}],
		"name": "game",
		"outputs": [{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wait",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_index",
			"type": "uint256"
		}],
		"name": "getATime",
		"outputs": [{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "valMax",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "getAllPoolForSeasson",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "getCantGameForPlayer",
		"outputs": [{
				"internalType": "address[]",
				"name": "players",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "cantGame",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_indexSeasson",
			"type": "uint256"
		}],
		"name": "getCantPlayer",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "_from",
			"type": "address"
		}],
		"name": "getCantTokenGForOwner",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "_seassonIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_playerIndex",
				"type": "uint256"
			}
		],
		"name": "getPlayer",
		"outputs": [{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wait",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeGame",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_cost",
			"type": "uint256"
		}],
		"name": "getSecondMax",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValueReward",
		"outputs": [{
				"internalType": "uint256",
				"name": "recompensa",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nextRecompensa",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "indexSeasson",
			"type": "uint256"
		}],
		"name": "getWinnersSeasson",
		"outputs": [{
				"internalType": "address[]",
				"name": "players",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "cantGame",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "reward",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "helper",
		"outputs": [{
			"internalType": "uint16",
			"name": "",
			"type": "uint16"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastDayTimestamp",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "org",
		"outputs": [{
			"internalType": "address payable",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "orgWhithdraw",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "playing",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pool",
		"outputs": [{
			"internalType": "uint16",
			"name": "",
			"type": "uint16"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolRun",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "poolSeasson",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "seassons",
		"outputs": [{
				"internalType": "address payable",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wait",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_cantDays",
			"type": "uint256"
		}],
		"name": "setCantDays",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_cantTokenGovernance",
			"type": "uint256"
		}],
		"name": "setCantTokenGovernance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_cost",
			"type": "uint256"
		}],
		"name": "setCostWei",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint16",
			"name": "_div",
			"type": "uint16"
		}],
		"name": "setDiv",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address payable",
			"name": "_org",
			"type": "address"
		}],
		"name": "setOrg",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "_owner",
			"type": "address"
		}],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "bool",
			"name": "_playing",
			"type": "bool"
		}],
		"name": "setPlaying",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint16",
			"name": "_pool",
			"type": "uint16"
		}],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "indexSeasson",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cantWinner",
				"type": "uint256"
			}
		],
		"name": "setTotalWinnerSeasson",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "times",
		"outputs": [{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "valMax",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "totalWinnerSeasson",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_timestamp",
			"type": "uint256"
		}],
		"name": "winVerify",
		"outputs": [{
			"internalType": "address payable",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winnerCurrent",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "winnerSeasson",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	}
];