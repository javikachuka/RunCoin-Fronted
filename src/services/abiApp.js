export const CONST_ABI = [{
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
		"inputs": [],
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
			"name": "indexSeason",
			"type": "uint256"
		}],
		"name": "claimWinnerSeasonPool",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "payable",
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
			"internalType": "address",
			"name": "contract_governance",
			"type": "address"
		}],
		"stateMutability": "payable",
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
				"name": "season",
				"type": "uint256"
			}
		],
		"name": "Game",
		"type": "event"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_countDays",
			"type": "uint256"
		}],
		"name": "setCountDays",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_countTokenGovernance",
			"type": "uint256"
		}],
		"name": "setCountTokenGovernance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint8",
			"name": "_helper",
			"type": "uint8"
		}],
		"name": "setHelper",
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
			"internalType": "uint256",
			"name": "_passport",
			"type": "uint256"
		}],
		"name": "setPassport",
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
			"internalType": "uint8",
			"name": "_pool",
			"type": "uint8"
		}],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "indexSeason",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "countWinner",
				"type": "uint256"
			}
		],
		"name": "setTotalWinnerSeason",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "Winner",
		"type": "event"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "amountTokenGForOwner",
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
		"name": "countDays",
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
		"name": "countDaysCurrent",
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
			}
		],
		"name": "countPlayForSeason",
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
		"name": "countTokenGovernance",
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
		"name": "currentSeason",
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
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
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
			"name": "indexSeason",
			"type": "uint256"
		}],
		"name": "getAllPoolForSeason",
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
			"name": "_indexSeason",
			"type": "uint256"
		}],
		"name": "getCountPlayer",
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
		"name": "getLengthTimes",
		"outputs": [{
			"internalType": "uint256",
			"name": "length",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "_seasonIndex",
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
		"inputs": [{
			"internalType": "uint256",
			"name": "_time",
			"type": "uint256"
		}],
		"name": "getTimeMax",
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
			"name": "indexSeason",
			"type": "uint256"
		}],
		"name": "getWinnersSeason",
		"outputs": [{
				"internalType": "address[]",
				"name": "players",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "countGame",
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
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
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
		"name": "passport",
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
			}
		],
		"name": "playerWithdraw",
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
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
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
		"name": "poolSeason",
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
		"name": "seasons",
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
		"name": "totalWinnerSeason",
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
		"name": "winnerSeason",
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
	}
]