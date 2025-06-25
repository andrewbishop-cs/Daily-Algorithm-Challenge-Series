/*
	As a part of your team's cloud storage system, you are asked to implement a feature to divide storage space
	as per the plan assigned to a user. The cloud storage of your company is divided into blocks (you can
	consider it as an array). Each user can be assigned certain non-overlapping interval blocks of the array
	depending on their plan.
	Write a function to manage the allocation of these array blocks to users. Also, if a storage block is
	required to be extended, handle that and ensure that no two users are allocated same storage block.
	Input will be an array 'blocks' representing the cloud storage and an array of user allocations 
	'plans' where each element is an object like {user: 'A', startAt: 2, endAt: 5}
	A user's plan might be extended. Plan extensions come as a separate array in the format 
	 {user: 'A', extendBy: 3}. The extension will always be continuous, i.e., we do not have to flip blocks
	or move them around.
	A user's extension will fail if the next contiguous storage blocks according to extension are already
	allocated. 
	Return true if cloud storage allocation and all extensions were accomplished without 
	any overlap, false otherwise.
*/

// TODO: implement cloudStorageAlloc function
class CloudStorage {

	allocateStorage(blocks: number[], plans: {user: string, startAt: number, endAt: number}[]): boolean {
		// code goes here
		return false
	}

	extendPlan(plans: {user: string, extendBy: number}[]): boolean {
		// code goes here
		return false
	}
}
