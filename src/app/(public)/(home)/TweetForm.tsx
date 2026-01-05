import { postTweet } from '@/server-actions/post-tweet'

export function TweetForm() {
	return (
		<form
			action={postTweet}
			className="border border-black/80 rounded-xl p-4 text-white space-y-3 mb-5"
		>
			<input
				name="content"
				placeholder="What’s happening?"
				className="w-full bg-transparent outline-none placeholder-gray-500 text-black"
			/>
			<div className="flex justify-end">
				<button
					type="submit"
					className="text-black text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition"
				>
					Tweet
				</button>
			</div>
		</form>
	)
}
